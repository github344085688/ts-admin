<template>
    <div>
        <MyCheckbox :label="checkbox.label" :id="checkbox.id" v-model="checkbox.checked"/>
        {{checkbox.checked}}
    </div>
</template>