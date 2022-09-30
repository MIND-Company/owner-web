import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './login-page.module.css';
import {encodingToB64} from '../../utils/encodingToB64';
import {path} from '../../utils/path';

export const LoginPage = () => {
	const navigate = useNavigate();
	const [currentLogin, setCurrentLogin] = useState('');
	const [currentPassword, setCurrentPassword] = useState('');
	const [isError, setError] = useState(false);

	const checkResponse = function () {
		async function getResponse() {
			const response = await fetch(
				`${path}`,
				{
					headers: {
						Authorization:
              'Auth ' + encodingToB64(currentLogin + ':' + currentPassword),
					},
				},
			);

			// Моки
			const login = 'login';
			const password = '123';
			// Моки

			if (currentLogin === login && currentPassword === password) {
				navigate('/parkings');
				localStorage.setItem(
					'token',
					encodingToB64(currentLogin + ':' + currentPassword),
				);
			} else {
				setError(true);
			}
		}

		getResponse();
	};

	//   Const data = await response.json();

	//       if (response.ok) {
	//         navigate("/parkings", { state: data });
	//         localStorage.setItem(
	//           "token",
	//           encodingToB64(currentLogin + ":" + currentPassword)
	//         );
	//       } else {
	//         setError(true);
	//       }
	//     }

	//     getResponse();
	//   };

	const handleChangeLogin = (event: {target: {value: React.SetStateAction<string>}}) => {
		setCurrentLogin(event.target.value);
	};

	const handleChangePassword = (event: {target: {value: React.SetStateAction<string>}}) => {
		setCurrentPassword(event.target.value);
	};

	return (
		<div>
			<input
				placeholder='Логин'
				value={currentLogin}
				onChange={handleChangeLogin}
			/>
			<input
				placeholder='Пароль'
				value={currentPassword}
				onChange={handleChangePassword}
				type='password'
			/>
			<button className={styles.checkResponse} onClick={checkResponse}>
        Войти
			</button>
			{isError && (
				<div className={styles.error}>Неправильный логин или пароль!</div>
			)}
		</div>
	);
};
