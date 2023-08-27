import productsService from "../services/productsService";
import Product from "../components/Product/Product";

const HomePage = ({ productData }) => {
  return <Product product={productData} />;
};

export async function getServerSideProps() {
  const productData = await productsService.getProduct(1);

  if (!productData)
    return {
      notFound: true,
    };

  return {
    props: {
      productData,
      seo: {
        title: productData.title,
        description: productData.description,
      },
    },
  };
}

export default HomePage;
