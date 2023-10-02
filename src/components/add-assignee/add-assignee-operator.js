import { useQuery } from "@apollo/client";
import { queryGetCourseLinkDetails } from "./add-assignee-queries";

function AddAsigneeOperator () { 

    function useGetCourseLinkDetails (unitId) {
        const { loading, error, data } = useQuery(queryGetCourseLinkDetails, {
            variables: { unitId: unitId },
        });
        return { loading, error, data };
    }

    return { useGetCourseLinkDetails: useGetCourseLinkDetails };
}

export default AddAsigneeOperator();