import { Ctx, NotFoundError } from "blitz"
import db, { FindFirstProjectArgs } from "db"

type GetProjectInput = Pick<FindFirstProjectArgs, "where">

export default async function getProject({ where }: GetProjectInput, ctx: Ctx | any) {
  ctx.session.authorize()

  const project = await db.project.findFirst({ where })

  if (!project) throw new NotFoundError()

  return project
}
