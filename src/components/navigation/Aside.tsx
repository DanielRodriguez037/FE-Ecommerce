import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    id: 4,
    name: 'Inventario',
    icon: 'inventory',
    link: '/inventory'
  },
  {
    id: 3,
    name: 'Salidas',
    icon: 'output',
    link: '/output_inventory_List'
  },
  {
    id: 1,
    name: 'Auditoria',
    icon: 'format_list_bulleted',
    link: '/audit'
  }
];

const Icon = ({ icon }: { icon: string }) => (
  <i className="material-icons opacity-10">{icon}</i>
);

const NavHeader = () => (
  <div className="sidenav-header">
    <i
      className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
      aria-hidden="true"
      id="iconSidenav"
    />
    <Link
      className="navbar-brand m-0"
      to=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
      target="_blank"
    >
      <img
        src="../assets/img/logo-ct.png"
        className="navbar-brand-img h-100"
        alt="main_logo"
      />
      <span className="ms-1 font-weight-bold text-white">Inventario Agucor</span>
    </Link>
  </div>
);

type ButtonProps = {
  onClick: (item: string) => void;
  id: number;
  name: string;
  icon?: string;
  link: string;
  isActive: boolean;
  hasSubNav?: boolean;
};

const NavButton: FC<ButtonProps> = ({
  id,
  onClick,
  name,
  icon,
  isActive,
  hasSubNav,
  link
}) => (
  <ul key={id} className="navbar-nav">
    <li className="nav-item">
      <Link
        className={
          isActive
            ? 'nav-link text-white active bg-gradient-primary'
            : 'nav-link text-white'
        }
        onClick={() => onClick(name)}
        to={link}
      >
        {icon && <Icon icon={icon} />}
        <span>{name}</span>
        {hasSubNav && <Icon icon={`expand_${isActive ? 'less' : 'more'}`} />}
      </Link>
    </li>
  </ul>
);

const Aside = () => {
  const [activeItem, setActiveItem] = useState<string>('');

  const handleClick = (item: string) => {
    setActiveItem(item !== activeItem ? item : '');
  };

  return (
    <aside
      className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
      id="sidenav-main"
    >
      <NavHeader />
      <hr className="horizontal light mt-0 mb-2" />
      <div
        className="collapse navbar-collapse  w-auto  max-height-vh-100"
        id="sidenav-collapse-main"
      >
        {menuItems.map((item) => (
          <div key={item.id}>
            <NavButton
              key={item.id}
              id={item.id}
              onClick={handleClick}
              link={item.link}
              name={item.name}
              icon={item.icon}
              isActive={activeItem === item.name}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Aside;
