import productsService from "../../services/productsService";
import Product from "../../components/Product/Product";

const ProductPage = ({ productData }) => {

    return <Product product={productData} />
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    };
}

export async function getStaticProps({ params }) {
    const productData = await productsService.getProduct(params.id);

    if (!productData)
        return {
            notFound: true
        }

    return {
        props: {
            productData,
            seo: {
                title: productData.title,
                description: productData.description
            }
        },
        revalidate: 30,
    }
}

export default ProductPage;