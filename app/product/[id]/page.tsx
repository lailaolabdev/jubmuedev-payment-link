// UI
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { title, subtitle } from "@/components/primitives";
import { Link } from "@nextui-org/link";

async function getProductDetail(id: string) {
	const response = await fetch(`https://fakestoreapi.com/products/${id}`, {});

	if (response.ok) {
		const data = await response.json();
		console.log(data);
		return data;
	}

	throw new Error("Failed to fetch products");
}

export default async function ProductDetail({
	params,
}: { params: { id: string } }) {
	const { id } = params;
	const product = await getProductDetail(id);

	// console.log(product);

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

					<Link
						className="p-4 text-white bg-black rounded-lg cursor-pointer dark:bg-white dark:text-black"
						// variant="flat"
						// color="default"
						// radius="lg"
						// size="sm"
						// href={`/product/${products?.[2]?.id}`}
					>
						Buy Now
					</Link>
				</section>
			</CardBody>
		</Card>
	);
}
