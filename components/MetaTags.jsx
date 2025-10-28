import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const MetaTags = ({ title, description }) => {
  useEffect(() => {
    console.log(document.querySelector('meta[name="description"]'));
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}

export default MetaTags
