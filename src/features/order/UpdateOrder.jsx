/* eslint-disable no-unused-vars */
import { useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

// eslint-disable-next-line react/prop-types
function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40 text-left">Phone number</label>
        <div className="grow">
          <input className="input w-full" type="tel" name="phone" required />

          {/* {formErrors?.phone && (
            <p className="mt-2 rounded bg-red-100 p-2 text-xs text-red-700">
              {formErrors.phone}
            </p>
          )} */}
        </div>
      </div>
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request, params }) {
  const formData = await request.formData();
  const datax = Object.fromEntries(formData);
  console.log(datax.phone);
  
  const data = { priority: true, phone:datax.phone };
  await updateOrder(params.orderId, data);
  return null;
}
