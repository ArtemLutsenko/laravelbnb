<template>
    <div>
        <div v-if="loading">Data is loading...</div>
        <div v-else>
            <div class="row" v-for="row in rows" :key="row + 'row'">
                <div
                    class="col"
                    v-for="(bookable, column) in bookablesInRow(row)"
                    :key="'row' + row + column"
                >
                    <bookable-list-item
                        :title="bookable.title"
                        :content="bookable.content"
                    ></bookable-list-item>
                </div>
                <div class="col" v-for = "p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
            </div>
        </div>
    </div>
</template>
<script>
import BookableListItem from "./BookableListItem";
export default {
    components: {
        BookableListItem
    },
    data() {
        return {
            bookables: null,
            loading: false,
            columns: 3
        };
    },
    methods: {
        bookablesInRow(row) {
            return this.bookables.slice((row - 1) * this.columns, row * this.columns);
        },
        placeholdersInRow(row) {
          return this.columns - this.bookablesInRow(row).length
        }
    },
    computed: {
        rows() {
            return this.bookables === null
                ? 0
                : Math.ceil(this.bookables.length / this.columns);
        }
    },
    created() {
        this.loading = true;
        setTimeout(() => {
            this.bookables = [
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                },
                {
                    title: "Cheap villa!!!",
                    content: "A very cheap villa"
                }
            ];
            this.loading = false;
        }, 2000);
    }
};
</script>
