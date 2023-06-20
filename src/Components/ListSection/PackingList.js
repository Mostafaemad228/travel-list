import Items from './../ItemsComponant/Items';

function PackingList({ initialItems }) {
    return (
        <div className="list">
            <ul>
                <Items initialItems={initialItems} />
            </ul>
        </div>
    )
}

export default PackingList
