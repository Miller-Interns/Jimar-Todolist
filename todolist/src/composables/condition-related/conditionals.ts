/*
Purpose:
Export/Import conditions
*/

import { TodoList } from '../../types/types'
import { displayTaskList, addButtonState, hideCompleted, displayLifeCategory, displayEducationCategory, displayWorkCategory, displayNatureCategory, displayOthersCategory } from '../main-data-flow'

//Updating Functions
export function updateDisplayTaskList(update: boolean) {
  displayTaskList.value = update
}

export function updateAddButton_State(update: boolean) {
  addButtonState.value = update
}

export function showIsCompletedState() {
  return hideCompleted.value ? 'Show all' : 'Hide completed'
}

export function removable(todo: TodoList) {
  return !todo.editModeState || todo.done
}

export function updateDisplayLifeCategory_State(update: boolean) {
  displayLifeCategory.value = update
}

export function updateDisplayEducationCategory_State(update: boolean) {
  displayEducationCategory.value = update
}

export function updateDisplayWorkCategory_State(update: boolean) {
  displayWorkCategory.value = update
}

export function updateDisplayNatureCategory_State(update: boolean) {
  displayNatureCategory.value = update
}

export function updateDisplayOthersCategory_State(update: boolean) {
  displayOthersCategory.value = update
}