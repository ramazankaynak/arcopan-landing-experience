import { useParams } from "react-router-dom";
import B2bProductDetailLayout from "@/components/B2bProductDetailLayout";
import NotFound from "@/pages/NotFound";
import { lineProductDetails, type ProductLineId } from "@/content/b2bProductRegistry";

type Props = {
  line: ProductLineId;
};

const B2bLineProductPage = ({ line }: Props) => {
  const { slug } = useParams();
  if (!slug) return <NotFound />;

  const detail = lineProductDetails[line][slug];
  if (!detail) return <NotFound />;

  return (
    <B2bProductDetailLayout
      detail={detail}
      secondaryCrumb={{ label: detail.familyLabel }}
    />
  );
};

export default B2bLineProductPage;
