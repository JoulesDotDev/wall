<script lang="ts">
    export let message = "";
    export let type: ToastType = "default";
</script>

<style>
    #toast {
        user-select: none;
        max-width: 300px;
    }
</style>

<div
    id="toast"
    class="inline-block rounded text-center p-5 {type === 'warning' ? 'bg-red-400' : 'bg-blue-400'}">
    {message}
</div>
