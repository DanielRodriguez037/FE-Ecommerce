import * as signalR from '@microsoft/signalr';

// Stores
import useStore from '@store/store';

// Services
import { authenticationServices } from '@services/authentication/authentication.service';
import { ENDPOINT, MICROSERVICES } from '@services/settings/environments';
const { authentication } = MICROSERVICES;

const SignalRConnectionHelper = new signalR.HubConnectionBuilder()
	.withUrl(`${ENDPOINT}${authentication.replace('/api', '')}/Sessions`)
	.withAutomaticReconnect({
		nextRetryDelayInMilliseconds() {
			return 5000;
		},
	})
	.build();

const setConnectionId = async () => {
	if (SignalRConnectionHelper.connectionId) {
		const connectionID = SignalRConnectionHelper.connectionId;
		const { userLogged } = useStore.getState();

		useStore.getState().setConnectionID(connectionID);

		if (userLogged) {
			await authenticationServices.session({ connectionID, document: userLogged?.personalData.documentId });
		}
	}
};

SignalRConnectionHelper.onreconnected(() => {
	const { userLogged } = useStore.getState();

	authenticationServices.deleteConnectionId({
		documentId: userLogged.personalData.documentId,
		connectionId: useStore.getState().connectionID,
	});

	setConnectionId();
});

const startConnectionWithRetries = () => {
	SignalRConnectionHelper.start()
		.then(async () => {
			setConnectionId();
			SignalRConnectionHelper.on('OnMessageNotification', () => {
				useStore.getState().setCountNotificationWithoutRead(useStore.getState().countNotificationWithoutRead + 1);
				useStore
					.getState()
					.setStateQueriesSignalR({ ...useStore.getState().stateQueriesSignalR, stateNotification: true });
			});

			SignalRConnectionHelper.on('OnMessageMailBox', e => {
				// Valida si el buzón seleccionado es igual al que se esta disparando en el signalR y asigna los valores
				useStore.getState().setStateQueriesSignalR({
					...useStore.getState().stateQueriesSignalR,
					mailBoxIdSignalREqualsMailBoxSelected: !!(
						useStore.getState().mailBoxSelected && useStore.getState().mailBoxSelected.id === e.mailBoxId
					),
				});

				if (
					!useStore.getState().mailBoxSelected ||
					!useStore.getState().stateQueriesSignalR.mailBoxIdSignalREqualsMailBoxSelected
				) {
					useStore.getState().setTotalMessageCount(useStore.getState().totalMessageCount + 1);
					useStore
						.getState()
						.setStateQueriesSignalR({ ...useStore.getState().stateQueriesSignalR, stateMailBox: true });
				}
			});
		})
		.catch(() => {
			setTimeout(() => {
				startConnectionWithRetries();
			}, 5000);
		});
};

startConnectionWithRetries();

export { SignalRConnectionHelper };
