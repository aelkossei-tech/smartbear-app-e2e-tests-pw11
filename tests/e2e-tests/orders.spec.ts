import { test, expect } from "./../../fixtures/PageObject";


test.describe("Orders verification @Orders @Regression", () => {
  // test("Add a new order and validate", async ({ page }) => {
  //   console.log(OrderData.newOrder.addressInfo);
  //   console.log(OrderData.newOrder.paymentInfo);
  //   console.log(OrderData.newOrder.productInfo);
  // });

  // test("Edit an existing order and validate", async ({ page }) => {
  //   console.log(OrderData.editOrder.addressInfo);
  //   console.log(OrderData.editOrder.paymentInfo);
  //   console.log(OrderData.editOrder.productInfo);
  // });

  test("Add a new order and validate from fixtures", async ({ orderData }) => {
    console.log(orderData.addressInfo);
    console.log(orderData.paymentInfo);
    console.log(orderData.productInfo);
  });
});