import styles from "./Header.module.css";
function Header() {
  return (
    <img className={styles.logo} src="/logosvg.svg" alt="Логотип журнала" />
  );
}

// export default Header;
// import SelectUser from '../SelectUser/SelectUser';
// import Logo from '.logosvg.svg';

// const logos = ['/logosvg.svg', '/vite.svg'];

// function Header() {

// 	return (
// 		<>
// 			<Logo image={logos[0]} />
// 			<SelectUser />
// 		</>
// 	);
// }

export default Header;