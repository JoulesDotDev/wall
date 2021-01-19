<script lang="ts">
    import { fade } from "svelte/transition";
    import { Toaster } from "../stores";
    import Toast from "./toast.svelte";
</script>

<style>
    #toaster {
        position: fixed;
        right: 0;
        bottom: 0;
    }
</style>

<div id="toaster" class="p-5 text-right">
    {#each $Toaster as toast}
        <div out:fade={{ duration: 400 }} class="mt-5">
            <Toast type={toast.type} message={toast.message} />
        </div>
    {/each}
</div>
