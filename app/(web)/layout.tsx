import TopBar from "@/components/layouts/navigations/Topbar";

export default function WebLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main>
			<TopBar />
			{children}
		</main>
	);
}
