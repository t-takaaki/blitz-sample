import { Ctx } from "blitz"
import db, { FindManyProjectArgs } from "db"

type GetProjectsInput = Pick<FindManyProjectArgs, "where" | "orderBy" | "skip" | "take">

export default async function getProjects(
  { where, orderBy, skip = 0, take }: GetProjectsInput,
  ctx: Ctx | any
) {
  ctx.session.authorize()

  const projects = await db.project.findMany({
    where,
    orderBy,
    take,
    skip,
  })

  const count = await db.project.count()
  const hasMore = typeof take === "number" ? skip + take < count : false
  const nextPage = hasMore ? { take, skip: skip + take! } : null

  return {
    projects,
    nextPage,
    hasMore,
    count,
  }
}
