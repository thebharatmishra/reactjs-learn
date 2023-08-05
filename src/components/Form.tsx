import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function Form() {
	const schema = yup.object().shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		age: yup
			.number()
			.positive()
			.integer()
			.min(18)
			.max(100)
			.required('Please enter correct age'),
		password: yup.string().min(4).max(20).required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref('password'), null], "Passwords Don't Match")
			.required()
	});

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		resolver: yupResolver(schema)
	});
	const onSubmit = (data: any) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				type='text'
				placeholder='John Doe'
				{...register('fullName')}
			/>
			<p>{errors.fullName?.message}</p>
			<input
				type='email'
				placeholder='john@example.com'
				{...register('email')}
			/>
			<p>{errors.email?.message}</p>
			<input
				type='number'
				placeholder='Age'
				{...register('age')}
			/>
			<p>{errors.age?.message}</p>
			<input
				type='password'
				placeholder='Password'
				{...register('password')}
			/>
			<p>{errors.password?.message}</p>
			<input
				type='password'
				placeholder='Confirm Password'
				{...register('confirmPassword')}
			/>
			<p>{errors.confirmPassword?.message}</p>
			<input type='submit' />
		</form>
	);
}
