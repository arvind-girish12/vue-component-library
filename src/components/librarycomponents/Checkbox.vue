<template>
    <div class="checkbox-container">
        <label for="input">{{label}}</label>
        <input type="checkbox" v-model="isChecked" name="input" id="input">
    </div>
</template>

<script>
export default {
    name: "Checkbox",
    props: {
        label: String,
    },
    data() {
        return {
            isChecked: false,
        }
    }
}
</script>
