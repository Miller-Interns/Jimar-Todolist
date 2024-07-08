/*
Purpose:
Export/Import conditions
*/

import { TodoList } from '../../types/types';
import { displayTaskList, addButtonState, hideCompleted,  } from '../main-data-flow';

//Updating Functions
export function updateDisplayTaskList(update:boolean){
    displayTaskList.value = update;
}

export function updateAddButton_State(update:boolean){
    addButtonState.value = update;
}

export function showIsCompletedState(){
    return hideCompleted.value ? 'Show all' : 'Hide completed'
}

export function toggleEditModeState(todo: TodoList) {
    todo.editModeState = !todo.editModeState
  }
  
export function removable(todo: TodoList) {
    return !todo.editModeState || todo.done
  }