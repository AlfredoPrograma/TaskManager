import { client } from 'server'
import { getFirestore, setDoc, getDoc, doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore'

const db = getFirestore(client)

export const manageTasksService = (uid) => {
  const userDoc = doc(db, 'tasks', uid)

  const getUserTasksList = async () => {
    return await getDoc(userDoc)
  }

  const createNewUserTasksList = async () => {
    const newUserTasksListBlueprint = {
      toDo: [],
      inProgress: [],
      done: []
    }

    try {
      const userTasksList = await setDoc(userDoc, newUserTasksListBlueprint)
      return userTasksList
    } catch (err) {
      console.log(err)
    }
  }

  const serverChangeTaskType = async (task, newTaskType) => {
    try {
      await updateDoc(userDoc, {
        [task.type]: arrayRemove(task),
        [newTaskType]: arrayUnion({ ...task, type: newTaskType })
      })
    } catch (err) {
      console.log(err)
    }
  }

  const addNewToDoTask = async (task) => {
    try {
      await updateDoc(userDoc, {
        toDo: arrayUnion(task)
      })
    } catch (err) {
      console.log(err)
    }
  }

  const deleteTaskFromServer = async (task) => {
    try {
      await updateDoc(userDoc, {
        [task.type]: arrayRemove(task)
      })
    } catch (err) {
      console.log(err)
    }
  }

  return {
    getUserTasksList,
    createNewUserTasksList,
    serverChangeTaskType,
    addNewToDoTask,
    deleteTaskFromServer
  }
}
