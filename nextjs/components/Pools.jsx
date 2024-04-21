export const Pools = () =>{

    return(   
        <div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th scope="col" class="px-6 py-4">Pool Type</th>
              <th scope="col" class="px-6 py-4">Earned</th>
              <th scope="col" class="px-6 py-4">APR</th>
              <th scope="col" class="px-6 py-4">Remaining</th>
              <th scope="col" class="px-6 py-4">Lock-up term</th>
              <th scope="col" class="px-6 py-4">Withdrawal delay</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">45-days staking pool</td>
              <td class="whitespace-nowrap px-6 py-4">0.00</td>
              <td class="whitespace-nowrap px-6 py-4">1%</td>
              <td class="whitespace-nowrap px-6 py-4">41354.1515</td>
              <td class="whitespace-nowrap px-6 py-4">45 days</td>
              <td class="whitespace-nowrap px-6 py-4">None</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">90-days staking pool</td>
              <td class="whitespace-nowrap px-6 py-4">0.00</td>
              <td class="whitespace-nowrap px-6 py-4">1%</td>
              <td class="whitespace-nowrap px-6 py-4">41354.1515</td>
              <td class="whitespace-nowrap px-6 py-4">90 days</td>
              <td class="whitespace-nowrap px-6 py-4">None</td>
            </tr>
            <tr class="border-b border-neutral-200 dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">180-days staking pool</td>
              <td class="whitespace-nowrap px-6 py-4">0.00</td>
              <td class="whitespace-nowrap px-6 py-4">1%</td>
              <td class="whitespace-nowrap px-6 py-4">41354.1515</td>
              <td class="whitespace-nowrap px-6 py-4">180 days</td>
              <td class="whitespace-nowrap px-6 py-4">None</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    )
}