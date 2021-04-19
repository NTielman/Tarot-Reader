const sorter = (list, sortParam, sortDirection = false) => {

    //sorts from A-Z a-z 1-5
    const sortDown = (itemA, itemB) => {

        if (itemA < itemB) {
            return -1;
        }
        if (itemA > itemB) {
            return 1;
        }
        return 0;
    };

    //sorts from Z-A z-a 5-1
    const sortUp = (itemA, itemB) => {

        if (itemA < itemB) {
            return 1;
        }
        if (itemA > itemB) {
            return -1;
        }
        return 0;
    };

    if (sortDirection) {
        list.sort((a, b) => {
            const itemA = a[sortParam];
            const itemB = b[sortParam];
            return sortUp(itemA, itemB);
        });
    } else {
        list.sort((a, b) => {
            const itemA = a[sortParam];
            const itemB = b[sortParam];
            return sortDown(itemA, itemB);
        });
    }

    return list;
}

export default sorter;