import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Card, CardBody } from "@nextui-org/card";

export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: {
		icon: "/favicon.ico",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en">
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable,
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container flex-grow px-6 pt-16 mx-auto max-w-7xl">
							{children}
						</main>
						<footer>
							<Card className="p-4 rounded-none">
								<CardBody className="flex flex-col items-center justify-between w-full space-y-4 md:flex-row">
									<p>© 2024 Lailao Store. All rights reserved.</p>
									<ul className="flex flex-col items-center gap-4 md:flex-row">
										<li>
											<Link
												href=""
												className="text-default-400 hover:text-default-500"
											>
												Privacy Policy
											</Link>
										</li>
										<li>
											<Link
												href=""
												className="text-default-400 hover:text-default-500"
											>
												Terms of Service
											</Link>
										</li>
										<li>
											<Link
												href=""
												className="text-default-400 hover:text-default-500"
											>
												Contact Us
											</Link>
										</li>
									</ul>
								</CardBody>
							</Card>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
