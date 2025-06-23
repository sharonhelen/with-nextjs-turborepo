type BlogDetailProps = {
  params: Promise<{ slug: string; locale: string }>;
};

export async function generateMetadata (props: BlogDetailProps) {
	const { slug } = await props.params;
	return {
		title: `Blog ${slug} Detail`
	}

}
export default async function Page (props: BlogDetailProps) {
	const {slug} = await  props.params
	return <>
	博客{slug}的详情
	</>
}