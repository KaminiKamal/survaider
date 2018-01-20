import { DISPLAY_GENDER_GRAPH, DISPLAY_RELATION_LIST } from "../constant/constant.jsx";

export function storeRelationList(responseData)
{
  const action =
  {
    type: DISPLAY_RELATION_LIST,
    responseData
  }
  return action;

}
