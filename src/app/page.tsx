import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import prisma from '@/lib/prisma'

export default async function Home() {
  // obtendo a lista de tarefas com prisma
  const tasks = await prisma.task.findMany()

  console.log(tasks)
  return (
    <div className="grid grid-cols-3 gap-4">
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardHeader>
            <CardTitle>{task.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{task.description}</p>
            <span className="text-slate-500">
              {new Date(task.createdAt).toLocaleDateString()}
            </span>
          </CardContent>
          <CardFooter className="flex gap-x-2 justify-end">
            <Button>Edit</Button>
            <Button variant="destructive">Delete</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
