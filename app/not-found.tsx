import Link from "next/link";
import { Button } from "@nextui-org/button";

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center w-full h-full">
			<h1 className="text-[200px] font-extrabold">404</h1>
			<h2 className="text-default-400 text-[50px]">Not Found</h2>
			<p className="text-default-300">Could not find requested resource</p>
			<Button className="mt-8 " variant="flat">
				<Link href="/">Return Home</Link>
			</Button>
		</div>
	);
}
