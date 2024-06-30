import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

async function getProducts() {
	const response = await fetch("https://fakestoreapi.com/products", {});

	if (response.ok) {
		const data = await response.json();
		return data;
	}

	throw new Error("Failed to fetch products");
}

export default async function Home() {
	const products = await getProducts();
	console.log(products, "products from server");

	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="justify-center w-full md:w-[800px] text-center">
				{/* <h1 className={title()}>Buy </h1>
				<h1 className={title({ color: "blue" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>Products</h1> */}
				<section className="flex justify-center md:flex-row flex-col md:h-[600px] gap-8 w-full item-center">
					<div className="w-full h-full ">
						<Card
							isFooterBlurred
							radius="lg"
							className="w-full h-full overflow-hidden border-none"
						>
							<CardBody className="w-full h-full">
								<Image
									alt={products?.[0]?.title}
									className="object-cover"
									src={products?.[0]?.image}
								/>
							</CardBody>
							<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
								<p className="text-tiny ">Available now.</p>
								<Link
									className="p-1 text-white rounded-lg cursor-pointer text-tiny bg-black/20"
									// variant="flat"
									// color="default"
									// radius="lg"
									size="sm"
									href={`/product/${products?.[0]?.id}`}
								>
									Buy Now
								</Link>
							</CardFooter>
						</Card>
					</div>
					<div className="flex flex-col justify-center w-full gap-8 item-center">
						<Card
							isFooterBlurred
							radius="lg"
							className="w-full h-full border-none"
						>
							<CardBody className="w-full h-full overflow-hidden">
								<Image
									alt={products?.[1]?.title}
									className="object-cover"
									src={products?.[1]?.image}
								/>
							</CardBody>
							<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
								<p className="text-tiny ">Available now.</p>
								<Link
									className="p-1 text-white rounded-lg cursor-pointer text-tiny bg-black/20"
									// variant="flat"
									// color="default"
									// radius="lg"
									size="sm"
									href={`/product/${products?.[1]?.id}`}
								>
									Buy Now
								</Link>
							</CardFooter>
						</Card>
						<Card
							isFooterBlurred
							radius="lg"
							className="w-full h-full overflow-hidden border-none"
						>
							<CardBody className="w-full h-full overflow-hidden">
								<Image
									alt={products?.[2]?.title}
									className="object-cover"
									src={products?.[2]?.image}
								/>
							</CardBody>
							<CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
								<p className="text-tiny ">Available now.</p>
								<Link
									className="p-1 text-white rounded-lg cursor-pointer text-tiny bg-black/20"
									// variant="flat"
									// color="default"
									// radius="lg"
									size="sm"
									href={`/product/${products?.[2]?.id}`}
								>
									Buy Now
								</Link>
							</CardFooter>
						</Card>
					</div>
				</section>
			</div>
		</section>
	);
}
