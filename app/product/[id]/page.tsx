// UI
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import BuyButton from "./components/BuyButton";

async function getProductDetail(id: string) {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`, {});

	if (response.ok) {
		const data = await response.json();
		return data;
	}

	throw new Error("Failed to fetch products");
}

export default async function ProductDetail({
	params,
}: { params: { id: string } }) {
	const { id } = params;

	const product = await getProductDetail(id);
	const publicKey = process.env.PAYMENT_GATEWAY_PUBLIC_KEY?.toString(); // Add your public key
	const secretKey = process.env.PAYMENT_GATEWAY_SECRET_KEY?.toString(); // Add your secret key

	return (
		<Card className="w-full mb-8 md:mb-0">
			<CardBody className="w-full flex items-center md:min-h-[600px] md:flex-row flex-col gap-4 overflow-hidden">
				<section className="flex items-center justify-center w-full">
					<Image
						alt={product?.title}
						className="object-contain w-full h-[600px]"
						src={product?.image}
					/>
				</section>
				<section className="flex flex-col w-full h-full gap-8">
					<div>
						<h1 className={title()}>{product?.title}</h1>
						<h2 className={subtitle()}>{product?.category}</h2>
					</div>

					<h3 className={title()}>{product?.price} LAK</h3>
					<p className="text-default-500">{product?.description}</p>

					<BuyButton data={product} keys={{ publicKey, secretKey }} />
				</section>
			</CardBody>
		</Card>
	);
}
