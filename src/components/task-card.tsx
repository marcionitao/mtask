import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Task } from '@prisma/client'
import clsx from 'clsx' // clsx e um pacote que ajuda a criar classes dinamicamente

export default async function TaskCard({ task }: { task: Task }) {
  return (
    <div>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <CardTitle>{task.name}</CardTitle>
          <Badge
            className={clsx({
              'bg-red-500 text-white': task.priority === 'high',
              'bg-yellow-500': task.priority === 'medium',
              'bg-green-500': task.priority === 'low',
              'bg-blue-500': task.priority === 'urgent',
            })}
          >
            {task.priority}
          </Badge>
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
    </div>
  )
}
