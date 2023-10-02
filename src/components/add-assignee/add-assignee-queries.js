import { gql } from "@apollo/client";

const queryGetCourseLinkDetails = gql`
                        query getCourseLinkDetails ($unitId: Int!) {
                            courseLinkData: course_GetCourseLinkData (unitId: $unitId) {
                                procedureList {
                                    procedureId
                                    name
                                    procedureCategoryId
                                    unitId
                                }
                                procedureCategoryList {
                                    procedureCategoryId
                                    name
                                    unitId  
                                }
                                documentCategoryList {
                                    documentCategoryId
                                    name
                                }
                                documentList {
                                    documentId
                                    name
                                    documentCategoryId
                                    unitId
                                }
                                equipmentCategoryList {
                                    equipmentCategoryId
                                    unitId
                                    name
                                }
                                equipmentList {
                                    equipmentId
                                    name
                                    equipmentCategoryId
                                    unitId
                                }
                            }
                        }
                        `;
                                

export { queryGetCourseLinkDetails };