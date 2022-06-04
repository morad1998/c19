<script context="module">
    export async function preload(page) {
        
        return {state: page.params['state']};

    }
</script>

<script>
    import CovidState from "../components/CovidState.svelte";
    import CovidChart from "../components/CovidChart.svelte";
    import TableContainer from "../components/TableContainer.svelte";
    export let state;

</script>

<CovidState/>
<CovidChart/>

<h1>{state}</h1>