import Head from 'next/head';
import { Toolbar } from '../components/toolbar';
import styles from '../styles/EOM.module.css';

export const EOM = ({ employee }) => {
	console.log(employee);
	const { name, position, image, description } = employee;

	return (
		<div className='page-container'>
			<Head>
				<title>Employee Of The Month</title>
				<meta
					name='description'
					content={`This month's employee of the month is ${name}`}
				/>

				<meta property='og:image' content={image} />
				<meta property='og:title' content='Employee Of The Month' />
				<meta
					property='og:description'
					content={`This month's employee of the month is ${name}`}
				/>

				<meta property='twitter:image' content={image} />
				<meta property='twitter:title' content='Employee Of The Month' />
				<meta
					property='twitter:description'
					content={`This month's employee of the month is ${name}`}
				/>
			</Head>

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
		'https://my-json-server.typicode.com/chanmyaemaung/news-app/employeeOfTheMonth';

	const apiResponse = await fetch(url);
	const employee = await apiResponse.json();

	return {
		props: {
			employee,
		},
	};
};

export default EOM;
