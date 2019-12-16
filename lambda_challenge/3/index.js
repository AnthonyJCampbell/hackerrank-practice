function removeKthLinkedListNode(head, k) {
    const list = [head]
    let current_node = head
    
    // Add all nodes to list
    // Until we've reached a node where "next" == null
    while (current_node["next"] !== null) {
        // console.log("adding", current_node["next"]["data"])
        list.push(current_node["next"])
        current_node = current_node["next"]
    }
    // If k > the number of nodes, nothing needs to be removed
    if (k <= list.length) {
        const index_of_target = list.length -k
        // console.log("raget to be removed is ", target["data"])
        const left_node = list[index_of_target - 1]
        // If left_node is undefined, that means the target is the first item of the LL, so we should simply remove the head of the LL and leave it at that
        if (left_node == undefined) {
            list.splice(0, 1)
        } else if (left_node["next"]) {
            left_node["next"] = list[index_of_target + 1]
        } else {
            left_node["next"] = null
        }
    }

    return list[0]
}