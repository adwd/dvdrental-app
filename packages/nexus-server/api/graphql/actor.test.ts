import { createTestContext } from "../../tests/__helper";

const ctx = createTestContext();

it("ensures that a actor name can be updated", async () => {
  const updateResult = await ctx.client.request(`
    mutation UpdateActorName {
      updateName(id: 2, first_name:"first", last_name: "last") {
        id
        first_name
        last_name
        last_update
      }
    }
  `);

  expect(updateResult).toMatchInlineSnapshot(`
Object {
  "updateName": Object {
    "first_name": "first",
    "id": 2,
    "last_name": "last",
    "last_update": "",
  },
}
`);
});
