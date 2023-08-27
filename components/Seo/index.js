import PropTypes from "prop-types";
import Head from "next/head";

const Seo = ({ seo }) => {
  return (
    <Head>
      <title>{seo?.title}</title>
      <meta property="og:site_name" content="webshop" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
    </Head>
  );
};

Seo.propTypes = {
  seo: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

Seo.defaultProps = {
  seo: {
    title: "NextJs Shop",
    description: "see details of products",
  },
};

export default Seo;
