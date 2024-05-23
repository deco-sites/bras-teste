import { AppContext } from "site/apps/site.ts";

const _setupDb = async (ctx: AppContext) => {
  const sqlClient = await ctx.invoke(
    "records/loaders/sqlClient.ts",
  );
  try {
    await sqlClient.execute({
      sql:
        `create table users (id integer primary key autoincrement, fullName text)`,
      args: [],
    });
  } catch (e) {
    console.log("failed to create users", e);
  }
  try {
    await sqlClient.execute({
      sql: `INSERT INTO users (fullName) VALUES (?), (?)`,
      args: ["Igor", "Gaudencio"],
    });
  } catch (e) {
    console.log("failed to insert users", e);
  }
};

export const loader = async (_: null, __: Request, ctx: AppContext) => {
  const drizzle = await ctx.invoke(
    "records/loaders/drizzle.ts",
  );

  // await _setupDb(ctx);
  // const usersD = await drizzle.select({
  //   id: users.id,
  //   fullName: users.fullName,
  // }).from(users);
  // console.log(usersD);

  return {
    users: [{ id: 10, fullName: "teste" }],
  };
};

export default function Section({ users }: Awaited<ReturnType<typeof loader>>) {
  return (
    <div>
      {users.map((user) => (
        <div class="flex gap-2">
          <span>{user.id}</span>
          <span class="font-bold">{user.fullName}</span>
        </div>
      ))}
    </div>
  );
}
