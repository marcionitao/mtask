'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createTask(formData: FormData) {
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()

  if (!name || !description || !priority) {
    return
  }

  const newTask = await prisma.task.create({
    data: {
      name,
      description,
      priority,
    },
  })

  console.log('Created new task:', newTask)

  redirect('/') // função 'redirect' faz a rota ser redirecionada para a rota '/' no servidor
}
export async function removeTask(formData: FormData) {
  const taskId = formData.get('taskId')?.toString()
  console.log('Remove task:', taskId)

  if (!taskId) return

  // delete task to prisma
  await prisma.task.delete({
    where: {
      id: parseInt(taskId),
    },
  })

  revalidatePath('/') // atualiza os dados e recarrega a pagina
}

export async function updateTask(formData: FormData) {
  const id = formData.get('id')?.toString()
  const name = formData.get('name')?.toString()
  const description = formData.get('description')?.toString()
  const priority = formData.get('priority')?.toString()

  if (!id || !name || !description || !priority) {
    return
  }

  // update task to prisma
  await prisma.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      name,
      description,
      priority,
    },
  })

  redirect('/')
}
