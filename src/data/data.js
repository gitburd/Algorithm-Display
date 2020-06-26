const data = [
    {
      "name": "Bubble Sort",
      "moreDetailsUrl": "https://en.wikipedia.org/wiki/Bubble_sort",
      "imageUrl": "https://images.immediate.co.uk/production/volatile/sites/4/2018/07/GettyImages-175622118-5109db9.jpg?quality=90&resize=940%2C399",
      "pros": ["Extremely simple", "Good for students", "Cool name"],
      "cons": ["Reeeal slow 🐢"],
      "averagePerformance": "O(n²)",
      "stable": true,
      "addedOn": "31 DEC 1999",
      "description": "Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in wrong order."
    },
    {
      "name": "Insertion sort",
      "moreDetailsUrl": "https://www.geeksforgeeks.org/insertion-sort/",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif",
      "pros": [
        "Simple",
        "Fast for small data",
        "Often used as a step in a more complex sort"
      ],
      "cons": ["Bad on large data sets"],
      "averagePerformance": "O(n²)",
      "stable": true,
      "addedOn": "01 JAN 2019",
      "description": "Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands."
    },
    {
      "name": "Pancake Sort",
      "moreDetailsUrl": "https://en.wikipedia.org/wiki/Pancake_sorting",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/0f/Pancake_sort_operation.png",
      "pros": ["Spatula-based"],
      "cons": ["You get hungry waiting for it to finish"],
      "averagePerformance": "O(🥞)",
      "addedOn": "14 FEB 2020",
      "description": "Pancake sorting is the colloquial term for the mathematical problem of sorting a disordered stack of pancakes in order of size when a spatula can be inserted at any point in the stack and used to flip all pancakes above it."
    },
    {
      "name": "Timsort",
      "moreDetailsUrl": "https://www.geeksforgeeks.org/timsort/",
      "imageUrl": "https://www.pynote.net/pics/uploads/2019/06/tim_peters.jpg",
      "pros": ["The FASTEST 🚀", "Works great on real data"],
      "cons": ["You need a Tim-level engineer to write it for you"],
      "averagePerformance": "O(n log n)",
      "stable": true,
      "addedOn": "01 FEB 2020",
      "description": "TimSort is a sorting algorithm based on Insertion Sort and Merge Sort. "
    },
    {
      "name": "Tree Sort",
      "moreDetailsUrl": "https://www.geeksforgeeks.org/tree-sort/",
      "imageUrl": "https://d18l82el6cdm1i.cloudfront.net/uploads/pA2mrgIZf3-output_4fbezy.gif",
      "pros": ["Efficient", "Resulting tree can be used for other purposes"],
      "cons": [
        "Memory needed for the tree which may duplicate the original data"
      ],
      "averagePerformance": "O(n log n)",
      "addedOn": "01 JAN 1970",
      "description": "Tree sort is a sorting algorithm that is based on Binary Search Tree data structure."
    }
]

export default data; 