import { AppContext } from "site/apps/site.ts";
import { users } from "site/db/schema.ts";

export const loader = async (_: null, __: Request, ctx: AppContext) => {
  const drizzle = await ctx.invoke(
    "records/loaders/drizzle.ts",
  );

  const dbUsers = await drizzle.select({
    fullName: users.fullName,
    id: users.id,
    email: users.email,
  }).from(
    users,
  );

  return { users: dbUsers };
};

export default function Section({ users }: Awaited<ReturnType<typeof loader>>) {
  return (
    <div>
      {users.map((user) => (
        <div class="flex gap-2">
          <span>{user.id}</span>
          <span class="font-bold">{user.fullName}</span>
          <span class="font-bold">{user.email}</span>
        </div>
      ))}
    </div>
  );
}
