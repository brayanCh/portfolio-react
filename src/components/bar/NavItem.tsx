interface INavItemProps {
    text: string;
    method: () => void;
    isOnTop: boolean;
}

const NavItem = (props: INavItemProps) => {


  return (
    <button
      onClick={props.method}
      className={!props.isOnTop ? 'item-nav' : 'item-nav item-w'}
    >
      {props.text}
    </button>
  );
};

export default NavItem;
