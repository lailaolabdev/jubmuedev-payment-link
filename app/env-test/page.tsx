export default function EnvTest() {
	const publicKey = process.env.PAYMENT_GATEWAY_PUBLIC_KEY?.toString(); // Add your public key
	const secretKey = process.env.PAYMENT_GATEWAY_SECRET_KEY?.toString(); // Add your secret key

	return (
		<div>
			<h1>publicKey: {publicKey}</h1>
			<h1>secretKey: {secretKey}</h1>
		</div>
	);
}
