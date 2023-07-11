<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Batman',
                'slug'  => 'the-batman',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/NZg3OcWsf6g',
                'thumbnail' => 'https://unsplash.com/photos/vA5ncJ5ONCk',
                'rating' => 5.0,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Batman 2',
                'slug'  => 'the-batman-2',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/NZg3OcWsf6g',
                'thumbnail' => 'https://unsplash.com/photos/vA5ncJ5ONCk',
                'rating' => 3.0,
                'is_featured' => 1,
            ],
            [
                'name' => 'The Batman 3',
                'slug'  => 'the-batman-3',
                'category' => 'Action',
                'video_url' => 'https://youtu.be/NZg3OcWsf6g',
                'thumbnail' => 'https://unsplash.com/photos/vA5ncJ5ONCk',
                'rating' => 4.0,
                'is_featured' => 1,
            ],
        ];
        Movie::insert($movies);
    }
}
