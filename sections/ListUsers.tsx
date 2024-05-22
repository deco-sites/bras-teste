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
  // await _setupDb(ctx);
  const users = await ctx.invoke.records.loaders.executeSql({
    sql: "select * from users",
  }) as unknown as { id: string; fullName: string | null }[];

  return { users };
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
