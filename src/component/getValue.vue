<template>
    <div class="parent">
        <child>
            <template slot-scope="props">
                <span>hello from parent</span>
                <span>{{ props.text }}</span>
            </template>
        </child>
    </div>
</template>

<script>
export default {
    props: ['mesFather'],
}
</script>