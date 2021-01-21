import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({ employee }) => {
	console.log(employee);
	const { name, position, image, description } = employee;

	return (
		<div className='page-container'>
			<Toolbar />

			<div className={styles.main}>
				<h1>Employee Of The Month</h1>
				<div className={styles.employeeOfTheMonth}>
					<h3>{name}</h3>
					<h6>{position}</h6>
					<img src={image} />
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export const getServerSideProps = async (pageContext) => {
	const url =
		'https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth';

	const apiResponse = await fetch(url);
	const employee = await apiResponse.json();

	return {
		props: {
			employee,
		},
	};
};

export default EOM;
