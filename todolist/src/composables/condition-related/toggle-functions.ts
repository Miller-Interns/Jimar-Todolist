import { displayTaskList, addButtonState, hideCompleted, checkBoxState } from "../main-data-flow";

export function toggleCondition(){
    displayTaskList.value = !displayTaskList.value;
}

export function toggleAddButtonState(){
    addButtonState.value = !addButtonState.value;
}

export function toggleHideCompleted(){
    hideCompleted.value = !hideCompleted.value;
}

export function checkBoxStateToggle(updateCompleted){
    checkBoxState.value = updateCompleted;
}

export function toggle(update){
    return update = !update
}