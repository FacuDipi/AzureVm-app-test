<script lang="ts">
	  import './styles.css';
    export let data
  
    
const {coins} = data
</script>

<div class='nav'>
<div class='title'>
  <h1>Crypto FD &lt💸&gt</h1> 
</div>

</div>
<div class="container">
	<table>
		<thead>
			<tr>
				<th>Rank</th>
				<th>Name</th>
				<th>Symbol</th>
				<th>Price</th>
				<th>24Hr Change</th>
			</tr>
		</thead>
		<tbody>
      {#each coins as coin}
			<tr>
				<td>{coin.rank}</td>
        <td>{coin.name}</td>
        <td>{coin.symbol}</td>
        <td>${(parseFloat(coin.priceUsd)).toFixed(2)}</td>
        <td class={coin.changePercent24Hr > 0 ? 'positive' : 'negative'}>{(parseFloat(coin.changePercent24Hr)).toFixed(2)}</td>
			</tr>
      {/each}		
		</tbody>
	</table>
</div>